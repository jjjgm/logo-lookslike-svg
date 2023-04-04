function renderShape(shape) {
    switch (shape) {
        case 'circle':
            return <Circle />;
        case'square':
            return <Square />;
        case 'triangle':
            return <Triangle />;
        default:
            return <Circle />;
    }
}

function renderText(text) {
    return <Text>${text}</Text>;
}

function renderTextColor(color) {
    return <TextColor color={color} />;
}

function renderBackgroundColor(color) {
    return <BackgroundColor color={color} />;
}

function generateMarkdown(data) {
    return `
        ${renderShape(data.shape)}
        ${renderText(data.text)}
        ${renderTextColor(data.textColor)}
        ${renderBackgroundColor(data.backgroundColor)}
        `
}

module.exports = generateMarkdown;

