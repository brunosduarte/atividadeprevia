import { useState } from "react";

export default function Numbers() {
    const [numbers, setNumbers] = useState([]);
    const [quantity, setQuantity] = useState([0]);    
  
  //  const firstRender = useRef(true);

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [quantity])


    function handleQuantityChange({ currentTarget }) {
        setQuantity(Number(currentTarget.value));
    }

    return (
        <div className="border m-2 p-1">
            <h2 className="text-center font-semibold">
                Gerador de números para MegaSena
            </h2>

        </div>
    )


}