export interface HeaderItem {
    text: String; 
    src: String;
}

export interface HeaderProps {
    headerItems: Array<HeaderItem>;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const {headerItems} = props;
    return (
        <div>
            {headerItems && headerItems.map((key) => (
                <><a href={key.src as string}>{key.text}</a></>
            ))}
        </div>
    );
}