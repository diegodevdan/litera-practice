import {Controller} from "cx/ui";

export default class CounterController extends Controller {
    onInit() {
        this.store.init('$page', {
            counter: 0,
            messageLimit: 'You cant increase more :('
        });
    }

    increase(){
        this.store.update('$page.counter', count => count + 1);
    }

    decrease() {
        let counter = this.store.get('$page.counter');
        if(counter <= 0) return;
        this.store.update('$page.counter', count => count - 1)
    }

    reset() {
        this.store.update('$page.counter', count => count = 0);
    }
}