import {Menu} from "./Menu";
import {Card} from "./Card";

export class Board extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    getCards() {
        const list:any[] = [];
        for (let i = 0;i < 20;i++){
            list.push(<Card/>);
        }
        return list;
    }

    render() {
        return (
            <div className={'Board'}>
                <Menu/>
                <div className={'Title'}>
                    Level 01
                    <span> EASY </span>
                    select stage from below
                </div>
                <div className={'Grid'}>
                    {this.getCards()}
                </div>
                <div className={'Bottom'}>Developed By Linedeer.</div>
            </div>
        );
    }
}