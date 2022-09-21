function runner(core, add, subtract, multiply) {
    try {
        const input1 = core.getInput('input1');
        const input2 = core.getInput('input2');

        const start = new Date();
        core.debug('Starting at : ' + start.toTimeString());

        core.info(`Performin addition of : ${input1} & ${input2} ...`);
        const addResult = add(input1, input2);

        core.info(`Performin subtraction of : ${input1} & ${input2} ...`);
        const subtractResult = subtract(input1, input2);

        core.info(`Performin multiplication of : ${input1} & ${input2} ...`);
        const multiplyResult = multiply(input1, input2);

        const end = new Date();
        core.debug('Ending at : ' + end.toTimeString());

        core.warning('Delta between startTime & endTime : ' + (end - start));

        core.setOutput('addition', addResult);
        core.setOutput('subtraction', subtractResult);
        core.setOutput('multiplication', multiplyResult);
    } catch (error) {
        core.setFailed(error.message);
    }
}

module.exports = {
    runner
};