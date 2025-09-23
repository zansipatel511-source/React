function Avatar({image,name,power}) {
    //console.log(props)

    //const {image,name,power}=props

    return (
        <div>
            <img style={{ borderRadius: "50%" }} 
            src={image} 
            height={200} 
            width={200} 
            alt="" />
            <p>Name:- {name}</p>
            <p>Power:- {power}</p>
        </div>
    )
}

export default Avatar