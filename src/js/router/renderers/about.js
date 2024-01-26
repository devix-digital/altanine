import Highway from '@dogstudio/highway';

class AboutRenderer extends Highway.Renderer {
	onEnter() {
		console.log('Entering on About page');
	}
	onEnterCompleted() {
		console.log('Completed Enter on About page');
	}
}

export default AboutRenderer;