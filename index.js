// code your solution here
function saturdayFun(todo= 'roller-skate'){
    return `This Saturday, I want to ${todo}!`
}

const mondayWork = function(todo='go to the office'){
    return `This Monday, I will ${todo}.`    
}

function wrapAdjective(wrap= '*'){
    return function(adj="special"){
        return `You are ${wrap}${adj}${wrap}!`
    }

}