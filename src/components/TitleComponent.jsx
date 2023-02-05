export default function Title(props) {
    return <>
    <div className={props.smallTitleStyle}>{props.smallTitle}</div>
    {props.middleTitle &&<div className={props.middleTitleStyle}>{props.middleTitle}</div>}
    <div className={props.bigTitleStyle}>{props.bigTitle}</div>
    </>;
}
