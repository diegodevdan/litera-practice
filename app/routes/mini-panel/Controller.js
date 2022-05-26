import { Controller } from "cx/ui";


export default class MiniPanel extends Controller {

    onInit() {
        this.store.init('$panel', {
            users: [
                {id: 1 ,name: "Diego Herrera", description: "Front end developer", isActive: true, image: "https://cutt.ly/0HNUPBZ" },
                {id: 2, name: "Jose Antonio", description: "Front end developer", isActive: true, image: "https://cutt.ly/0HNUPBZ" },
                {id: 3, name: "Oscar Cordero", description: "Front end developer", isActive: true, image: "https://cutt.ly/0HNUPBZ" },
                {id: 4, name: "Elver agudo", description: "Front end developer", isActive: true, image: "https://cutt.ly/0HNUPBZ" },
                {id: 5, name: "Veronica xavier", description: "Front end developer", isActive: true, image: "https://cutt.ly/0HNUPBZ" },
            ]
        })
    }

}

