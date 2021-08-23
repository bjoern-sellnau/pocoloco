const path1 = d3.select('#path1')
const path2 = d3.select('#path2')
const path3 = d3.select('#path3')
repeat(path1, 'M0 0L100 0L100 20L0 30Z', 'M0 0L100 0L100 15L0 50Z', 10000)
repeat(path2, 'M0 0L100 0L100 10L0 45Z', 'M0 0L100 0L100 45L0 10Z', 11000)
repeat(path3, 'M0 0L100 0L100 35L0 0Z', 'M0 0L100 0L100 10L0 30Z', 12500)
function repeat (path, d1, d2, duration) {
  path.attr('d', d2)
    .transition()
    .attr('d', d1)
    .duration(duration)
    .transition()
    .attr('d', d2)
    .duration(duration)
    .on('end', () => repeat(path, d1, d2, duration))
}