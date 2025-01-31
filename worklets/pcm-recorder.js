class PCMRecorder extends AudioWorkletProcessor {
  constructor() {
    super();
    this.BUFFER_SIZE = 3200;
    // this.BUFFER_SIZE = 512;
    this.int16Buffer = new Int16Array(this.BUFFER_SIZE);
    this.bufferOffset = 0;
    console.log("PCMRecorder initialized");
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    if (!input) {
      console.warn("No input data:");
      return true;
    }
    if (inputs.length > 1) {
      console.warn(
        "More than one input source:",
        inputs.length,
        outputs.length,
      );
    }

    const channelData = input[0];
    // if (input.length != 1) {
    //   console.warn("More than one channel:", input.length);
    // }
    if (!channelData) {
      // console.warn("No channel data", channelData);
      return true;
    }

    for (let i = 0; i < channelData.length; i++) {
      const sample = Math.max(-1, Math.min(1, channelData[i]));
      const intSample = sample < 0 ? sample * 32768 : sample * 32767;

      // Store the sample
      this.int16Buffer[this.bufferOffset++] = intSample;

      // If we've filled the buffer, send it out
      if (this.bufferOffset === this.BUFFER_SIZE) {
        // Post data to main thread
        this.port.postMessage(this.int16Buffer.buffer, [
          this.int16Buffer.buffer,
        ]);
        // console.log("Data sent to main thread");

        // Reallocate a new buffer since we've transferred the old one
        this.int16Buffer = new Int16Array(this.BUFFER_SIZE);
        this.bufferOffset = 0;
      }
    }

    // If you want to continue the audio flow, copy input to output
    for (let i = 0; i < outputs.length; ++i) {
      const output = outputs[i];
      for (let channel = 0; channel < output.length; ++channel) {
        output[channel].set(input[channel]);
      }
    }

    return true;
  }
}

registerProcessor("pcm-recorder", PCMRecorder);
