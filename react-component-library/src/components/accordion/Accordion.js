import { useState } from "react";

const Accordion = () => {

    const [expand,setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(previousExpand => !previousExpand);
    }
    return(
        <div className="accordion">
            <button onClick={handleExpand}>
                {expand ? "collapse" : "expand"}
                <span>{expand ? "-" : "+"}</span>
            </button>
            {expand && 
                <div className="content">
                    <h3>item 1</h3>
                    <h3>item 2</h3>
                </div>
            }
        </div>
    );
}
export default Accordion;