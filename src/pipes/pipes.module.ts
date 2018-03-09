import { NgModule } from '@angular/core';
import { CropPipe } from './crop/crop';
import { FullframePipe } from './fullframe/fullframe';

@NgModule({
	declarations: [CropPipe,
    FullframePipe],
	imports: [],
	exports: [CropPipe,
    FullframePipe]
})
export class PipesModule {}
