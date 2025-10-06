import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950">
      <Text className="text-white text-xl font-semibold">
        Sustainable Living App Scaffold
      </Text>
      <Text className="text-slate-200 mt-2 text-center px-8">
        Welcome! The build pipeline, linting, and testing are ready for upcoming milestones.
      </Text>
      <Link href="https://github.com/sustainable-living-app" asChild>
        <View className="mt-4 rounded-full bg-emerald-500 px-6 py-3">
          <Text className="text-white font-medium">View Project Docs</Text>
        </View>
      </Link>
    </View>
  );
}
