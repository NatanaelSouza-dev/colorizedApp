import { StatusBar } from 'expo-status-bar';

import Home from '@/screens/Home';
import { SafeAreaView } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar 
				animated 
				style="auto" 
			/>
			<Home />
		</SafeAreaView>
	);
}


