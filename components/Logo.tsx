import LogoSvg from '../../assets/svg/logo_code.svg';

interface Props extends React.ComponentProps<typeof LogoSvg> {}

export default function Logo(props: Props) {
  return <LogoSvg width={120} height={40} {...props} />;
}
