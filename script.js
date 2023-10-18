const data = [
    { label: 'Red'
    , value: 50, text: 'Alunos Frequentes' },
    { label: 'Green', value: 30, text: 'Alunos Infrequentes' },
    { label: 'Blue', value: 20, text: 'Alunos Cortados' }
 ];
 
 const width =  1900;
 const height = 300;
 const radius = Math.min(width, height) / 2;
 
 const svg = d3.select('.dashboard')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height /2})`);
 
 const color = d3.scaleOrdinal()
    .domain(data.map(d => d.label))
    .range(d3.schemeCategory10);
 
 const pie = d3.pie()
    .value(d => d.value);
 
 const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);
 
 const arcs = pie(data);
 
//fatias
 svg.selectAll('path')
    .data(arcs)
    .enter()
    .append('path')
    .attr('fill', d => color(d.data.label))
    .attr('d', arc);
 
    //porcentagem
    svg.selectAll('text')
    .data(arcs)
    .enter()
    .append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'Arial')
    .attr('font-size', '14px')
    .text(d => `${((d.endAngle - d.startAngle) / (2 * Math.PI) * 100).toFixed(1)}%`)

    //legenda
 const legend = svg.selectAll('.legend')
    .data(data)
    .enter().append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => `translate(180,${i * 20})`);
 
 legend.append('rect')
    .attr('x', -18)
    .attr('width', 18)
    .attr('height', 18)
    .style('fill', d => color(d.label));
 
 legend.append('text')
    .attr('x', 0)
    .attr('y', 9)
    .attr('dy', '.35em')
    .style('text-anchor', 'start')
    .attr('font-family', 'Arial')
    .attr('font-size', '14px')
    .text(d => d.text);

    /*
    const data2 = [
        { label: 'Red', value: 50, text: 'Alunos Frequentes' },
        { label: 'Green', value: 40, text: 'Alunos Infrequentes' },
        { label: 'Blue', value: 10, text: 'Alunos'}
     ];
    
     const width2 =  100;
     const height2 = 300;
     const radius2 = Math.min(width, height) / 2;
     
     const svg2 = d3.select('.dashboard2')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);
     
     const color2 = d3.scaleOrdinal()
        .domain(data.map(d => d.label))
        .range(d3.schemeCategory10);
     
     const pie2 = d3.pie()
        .value(d => d.value);
     
     const arc2 = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
     
     const arcs2 = pie(data);
     
     // Adicionando fatias
     svg2.selectAll('path')
        .data(arcs)
        .enter()
        .append('path')
        .attr('fill', d => color(d.data.label))
        .attr('d', arc);
     
     // Adicionando porcentagens
     svg2.selectAll('text')
        .data(arcs)
        .enter()
        .append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'Arial')
        .attr('font-size', '14px')
        .text(d => `${((d.endAngle - d.startAngle) / (2 * Math.PI) * 100).toFixed(1)}%`);
     
     // Adicionando legenda
     const legend2 = svg2.selectAll('.legend')
        .data(data)
        .enter().append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => `translate(180,${i * 20})`);
     
     legend2.append('rect')
        .attr('x', -18)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', d => color(d.label));
     
     legend2.append('text')
        .attr('x', 0)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'start')
        .attr('font-family', 'Arial')
        .attr('font-size', '14px')
        .text(d => d.text);
        */