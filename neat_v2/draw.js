let population = new Population();

let total_pop = 50,
mutation_rate = 0.005;

// let new_node = new Node();
// console.log(new_node);
// new_node.init(6, 'hidden', 1);
// let new_connection_1 = new Connection(),
// new_connection_2 = new Connection();
// new_connection_1.init(1, 6, 0.3, true);
// new_connection_2.init(6, 4, 0.5, true);
// genome.connections_list[0].enabled = false;
// genome.connections_list[1].enabled = false;
// genome.connections_list[3].enabled = false;
// genome.connections_list[5].enabled = false;
// genome.connections_list.push(new_connection_1);
// genome.connections_list.push(new_connection_2);
// genome.nodes_list.push(new_node);
// genome.feedForward([1, 2, 3]);
// console.log(genome.nodes_list[0].getOutput());

// for(let genome of population.population){
//     genome.feedForward([1, 2, 3, 4]);
//     if(genome.node_list[4].getOutput() < 0.5){
//         console.log(genome);
//     }
// }

// let genome = population.population[0];
// console.log(genome);
// let new_node = new Node();
// new_node.init(6, 'hidden', 1);
// let new_connection_1 = new Connection(),
// new_connection_2 = new Connection();
// new_connection_1.init(1, 6, 0.5, true);
// new_connection_2.init(1, 4, 0.5, true);
// genome.connections_list[0].enabled = false;
// genome.connections_list[1].enabled = false;
// genome.connections_list[3].enabled = false;
// genome.connections_list[5].enabled = false;
// genome.connections_list.push(new_connection_1);
// genome.connections_list.push(new_connection_2);
// genome.node_list.push(new_node);



// function testFunction(game, genome){
//     genome.feedForward([game.bird.y, game.bird.vel, game.pipes[0].x, game.pipes[0].top || 1, game.pipes[0].bottom || 1]);
//     if(genome.node_list[5].getOutput() > 0.85){
//         game.bird.birdJump();
//     }
// }

// Debugging
// let test_genome = new Genome();
// let test_inno = 1;
// let test_final_node_list = []
// let test_input_nodes = [];

// for(let i=0; i<3; i++){
//     let node = new Node();
//     node.init(i+1, 'input');
//     test_input_nodes.push(node);
//     test_final_node_list.push(node);
// }
// let test_output_nodes = [];
// for(let i=0; i<1; i++){
//     let index = test_final_node_list.length + i + 1;
//     let node = new Node();
//     node.init(index, 'output');
//     test_output_nodes.push(node);
//     test_final_node_list.push(node);
// }
// // let test_hidden_nodes = [];
// // for(let i=0; i<2; i++){
// //     let index = test_final_node_list.length + i + 1;
// //     let node = new Node();
// //     node.init(index, 'hidden');
// //     test_hidden_nodes.push(node);
// //     test_final_node_list.push(node);
// // }
// let connections_list = [];

// // Generating the starting connections
// for(let i=0; i<test_input_nodes.length; i++){
//     let input_node = test_input_nodes[i];
//     for(let j=0; j<test_output_nodes.length; j++){
//         let output_node = test_output_nodes[j];
//         let connection = new Connection();
//         let weight = (Math.random() * 4) - 2
//         connection.init(input_node.number, output_node.number, weight);
//         connection.setInnovationNumber(test_inno);
//         test_inno++;
//         connections_list.push(connection);
//     }
// }





function setup(){
    createCanvas(400, 600);
    // Game.init();
    population.init(total_pop, mutation_rate);
    population.firstGen(2, 1);
    // Game.setUpBirds(population.population);

    let birds = population.population;
    for(let bird of birds){
        console.log(bird.brain.connections_list[0].weight);
    }
    let bird = birds[0];

    console.log(bird);
    let genome = bird.brain;
    
    console.log(genome);
}


let check = false

function draw(){
    background(0);
    // Game.updateFrame();
}
