import { FlexBox, FlexRow, FlexCol } from 'cx/widgets';
import {Button} from 'cx/widgets';
import CounterController from './controller'

export default () => <cx>
    <div controller={CounterController}>
        <div text-tpl="{$page.counter}" >
            Other static content (this will not get rendered).
        </div>
        <FlexBox spacing wrap>
            <Button
                mod={"primary"}
                onClick={(e,{controller}) => {
                controller.decrease()
            }}>-1</Button>

            {/*<Button*/}
            {/*    onClick={(e, instance) => {*/}
            {/*        let { store } = instance;*/}
            {/*        store.update('$page.counter', count => count = 0)*/}
            {/*    }}*/}
            {/*>Reset</Button>*/}
            <Button
                mod={"danger"}
                onClick={(e, {controller}) => {
                    controller.reset()
                }}
            >Reset</Button>

            <Button
                mod={"success"}
                onClick={(e,instance) => {
                let {store} = instance;
                store.update('$page.counter', counter => counter + 1);
            }}>+1</Button>
        </FlexBox>
    </div>
</cx>