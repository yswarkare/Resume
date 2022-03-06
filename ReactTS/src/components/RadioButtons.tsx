import React, { Component } from "react";
import Project from "../models/Project";

interface Props {
	
}
interface State {
	items: Array<string>,
}

class RadioButtons extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			items: ["one", "two", "three", "four"],
		};
	}

    setSelectedItems = (e: React.MouseEvent, index: Number) => {
        console.log({...e.target});
        console.log(index);
    }

    render() {
        return (
            <>
                <div className={`w-fill flex flex-col justify-center content-center items-center`}>
                        {
                            this.state.items.map((item, index)=>{
                                return (
                                    <label className={`w-1/4 flex flex-row justify-start content-center items-center`} key={index} >
                                        <input
                                            type={`radio`}
                                            className="mr-2 form-radio text-primary focus:outline-none active:outline-none"
                                            name="item"
                                            title={`item`}
                                            value={item}
                                            // checked={true}
                                            onClick={(e)=>{this.setSelectedItems(e, index)}}
                                        ></input>
                                        <span className="ml-2">{item}</span>
                                    </label>
                                )
                            })
                        }
                </div>
            </>
        )
    }

}


export default RadioButtons;