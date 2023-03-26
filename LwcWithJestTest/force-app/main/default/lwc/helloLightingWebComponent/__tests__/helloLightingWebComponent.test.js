import { createElement } from 'lwc';
import HelloLightingWebComponent from 'c/helloLightingWebComponent';

describe('c-hello-lighting-web-component', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-hello-lighting-web-component', {
            is: HelloLightingWebComponent
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        //expect(1).toBe(1);
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Hi, Tarun Jest Test!'); 
    });
});