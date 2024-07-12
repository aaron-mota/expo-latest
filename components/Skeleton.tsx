import { DimensionValue, View, ViewProps } from 'react-native';

interface SkeletonProps extends ViewProps {
  variant?: 'rectangular' | 'text' | 'rounded' | 'circular';
  width?: DimensionValue;
  height?: DimensionValue;
}

export function Skeleton(props: SkeletonProps) {
  const { variant = 'rectangular', height = '100%', width = '100%', style, ...otherProps } = props;

  const backgroundColor = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };

  const skeletonStyles = {
    rectangular: {
      width: width,
      height: height,
    },
    circular: {
      width: typeof width === 'number' ? width : 64,
      height: typeof height === 'number' ? height : 64,
      borderRadius: typeof width === 'number' ? width / 2 : 64 / 2,
    },
    text: {
      width: width,
      height: 16,
      borderRadius: 4,
    },
    rounded: {
      width: width,
      height: height,
      borderRadius: 4,
    },
  };

  return <View style={[skeletonStyles[variant], backgroundColor, style]} {...otherProps} />;
}
