import {
    FlexRow,
    Repeater,
    Text,
    Button,
    Link
} from 'cx/widgets';
//Controllers
import MiniPanel from "./Controller";

//Styles
import "./card.scss";

export default () => <cx>
    <FlexRow
        justify={"space-between"}
        spacing={"xlarge"}
        vspacing={"xlarge"}
        wrap
        target={'desktop'}
        controller={MiniPanel}
    >
        {/*<Repeater records={Array.from({length: 20})}>*/}
        <Repeater
            records:bind={"$panel.users"}
        >
            <div className={'card'}>
                <img
                    // src="{$record.image}"
                    src="https://cutt.ly/0HNUPBZ"
                    alt="random image"
                    className={"card__image"}
                /> <br/>
                <Text
                    id={"text-title"}
                    className={"card__title"}
                    tpl='Hello, {$record.name}!'
                /> <br/>
                <Text
                    className={"card__description"}
                    tpl={"{$record.description}"}
                /> <br/>
                <Link>
                    <Button
                        className={"card__button"}
                        mod={"primary"}
                    >see details</Button>
                </Link>
            </div> <br/>
        </Repeater>
    </FlexRow>

</cx>