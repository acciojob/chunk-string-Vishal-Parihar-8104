function stringChop(str, size) {
  const chunks = [];
  const n = str.length;

  for (let i = 0; i < n; i += size) {
    chunks.push(str.substring(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));

