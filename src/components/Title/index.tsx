type Props = {
    title?: number;
};

export default function Title({ title }: Props): JSX.Element {
    return <div>{title}</div>;
}
