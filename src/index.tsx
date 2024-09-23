import { createRoot } from 'react-dom/client';
import { WidgetSchema } from 'shared/types/Widget.types';

const Widget: WidgetSchema = {
	async render(): Promise<boolean> {
		return true;
	  },
	
	async init(): Promise<boolean> {
		return true;
	},

	settings(): boolean {
		return true;
	},

	async dpSettings(): Promise<boolean> {
		return true;
	},

	async onSave(self): Promise<boolean> {
		return true;
	},

	async initMenuPage(): Promise<boolean> {
		return true;
	},

	destroy(): void {
	},

};

export default Widget;
