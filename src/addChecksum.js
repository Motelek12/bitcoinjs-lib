// SPDX-License-Identifier: MIT
// Utility: addChecksum for Bitcoin address validation
// Simple example for demonstration purposes

import * as crypto from 'crypto';

export function addChecksum(data) {
  const hash1 = crypto.createHash('sha256').update(data).digest();
  const hash2 = crypto.createHash('sha256').update(hash1).digest();
  return Buffer.concat([data, hash2.subarray(0, 4)]);
}

// Example usage
// console.log(addChecksum(Buffer.from("00aabbcc", "hex")).toString("hex"));
