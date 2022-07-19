// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(event = 'go to the office') {
    return `This Monday, I will ${event}.`
}

function wrapAdjective(visual) {
    return function (help = 'special') {
        return `You are ${visual}${help}${visual}!`
    }
}
