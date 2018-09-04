import { Component, ChangeDetectorRef, Inject } from '@angular/core'
import e from '../event-bus'

@Component({
  selector: 'AngularApp',
  template: `
		<div style="margin-top: 100px;">
      <h1>This was written in Angular</h1>
      <p>{{message}}</p>
		</div>
	`,
})
export default class AngularApp {
  message: string = "Message from React should appear here 😱"

  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}

  ngAfterContentInit() {
    e.on('message', message => {
      this.message = message.text
      this.changeDetector.detectChanges()
      this.returnMessageToReactWhenReceived()
    })
  }

  returnMessageToReactWhenReceived() {
    e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
  }
}
