var data = [159, 134, 160, 264, 397, 451, 582, 654];

    var scale = d3.scale.linear()
        .domain([0, 654])
        .range([0, 400])
    
    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", (d) => { return scale(d) + 'px' })
        .text((d) => {return 'R$ ' + d; });