import PropTypes from 'prop-types'

const Button = ({color, text, func}) => {
    return (
        <div>
            <button onClick={func} style={{backgroundColor: color}} className='btn'>{text}</button>
        </div>
    )
}
const onClick = () => {
    console.log("Hello Brad, SCREW OFF CHAD");
}
Button.defaultProps = {
    color: 'steelBlue',
    text: "add", // Here we use colons for some reason ig?
    func: onClick,
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
