import React from 'react';
import ReactDOM from 'react-dom/client'
import BoardStyle from '../CSS/Board.module.css'


function RegCell(props)
{
    var colID = "col" + props.row + "" + props.col;
    var keyE = "key" + props.row + "" + props.col;
    return (
        <div key={keyE} id={colID} className={props.cName}>
            {props.text}
        </div>
    )
}
function HeadRow(props)
{
    var rowID = "row" + props.row;
    var keyE = "key" + props.row;
    

    return (
        <div key={keyE} id={rowID} className={BoardStyle.row}>
            <RegCell row={props.row} col="0" cName={BoardStyle.headCell + " " + BoardStyle.black}/>
            <RegCell row={props.row} col="1" cName={BoardStyle.headCell} text="1"/>
            <RegCell row={props.row} col="2" cName={BoardStyle.headCell} text="2"/>
            <RegCell row={props.row} col="3" cName={BoardStyle.headCell} text="3"/>
            <RegCell row={props.row} col="4" cName={BoardStyle.headCell} text="4"/>
            <RegCell row={props.row} col="5" cName={BoardStyle.headCell} text="5"/>
            <RegCell row={props.row} col="6" cName={BoardStyle.headCell} text="6"/>
            <RegCell row={props.row} col="7" cName={BoardStyle.headCell} text="7"/>
            <RegCell row={props.row} col="8" cName={BoardStyle.headCell} text="8"/>
            <RegCell row={props.row} col="9" cName={BoardStyle.headCell + " " + BoardStyle.black}/>
        </div>
    )
}
function RegRow(props)
{
    var rowID = "row" + props.row;
    var keyE = "key" + props.row;
    var negColor = props.firstColor === "white" ? BoardStyle.black : BoardStyle.white;
    var firstCol = props.firstColor === "white" ? BoardStyle.white : BoardStyle.black;
    var textArr = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return(
        <div key={keyE} id={rowID} className={BoardStyle.row}>
            <RegCell row={props.row} col="0" cName={BoardStyle.headCell} text={textArr[props.row]}/>
            <RegCell row={props.row} col="1" cName={BoardStyle.regCell + " " + firstCol}/>
            <RegCell row={props.row} col="2" cName={BoardStyle.regCell + " " + negColor}/>
            <RegCell row={props.row} col="3" cName={BoardStyle.regCell + " " + firstCol}/>
            <RegCell row={props.row} col="4" cName={BoardStyle.regCell + " " + negColor}/>
            <RegCell row={props.row} col="5" cName={BoardStyle.regCell + " " + firstCol}/>
            <RegCell row={props.row} col="6" cName={BoardStyle.regCell + " " + negColor}/>
            <RegCell row={props.row} col="7" cName={BoardStyle.regCell + " " + firstCol}/>
            <RegCell row={props.row} col="8" cName={BoardStyle.regCell + " " + negColor}/>
            <RegCell row={props.row} col="9" cName={BoardStyle.headCell} text={textArr[props.row]}/>

        </div>
    );
}

function Board()
{
    return (
        <div key="Board" id="Board" className={BoardStyle.Board}>
            <HeadRow row="0"/>
            <RegRow row="1" firstColor="white"/>
            <RegRow row="2" firstColor="black"/>
            <RegRow row="3" firstColor="white"/>
            <RegRow row="4" firstColor="black"/>
            <RegRow row="5" firstColor="white"/>
            <RegRow row="6" firstColor="black"/>
            <RegRow row="7" firstColor="white"/>
            <RegRow row="8" firstColor="black"/>
            <HeadRow row="9"/>
        </div>
    );
}
export default Board;