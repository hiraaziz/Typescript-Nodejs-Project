import figlet from 'figlet';
import gradient from 'gradient-string';
export async function title() {
    console.log(gradient.morning(figlet.textSync('TODO APP', {
        font: 'Banner3',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    })));
}
