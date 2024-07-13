import { theme } from '@/theme';
import { View } from 'react-native';
import { Area, CartesianChart } from 'victory-native';

const DATA = Array.from({ length: 32 }, (_, i) => ({
  x: i,
  y: 40 + 30 * Math.random(),
}));

export function Chart() {
  return (
    <View style={{ height: 300 }}>
      <CartesianChart data={DATA} xKey="x" yKeys={['y']}>
        {({ points, chartBounds }) => (
          //👇 pass a PointsArray to the Line component, y0, as well as options.
          <Area
            points={points.y}
            y0={chartBounds.bottom}
            color={theme.colorReactLightBlue}
            animate={{ type: 'timing', duration: 300 }}
          />
        )}
      </CartesianChart>
    </View>
  );
}
