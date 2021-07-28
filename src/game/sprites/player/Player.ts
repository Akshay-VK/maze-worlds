import { float2 } from "../../../math/float2";
import { dim2 } from "../../../math/Dim2";
import { SpriteSheet } from "../../../images/Spritesheet";
import { ImageRenderer } from "../../../renderer/imageRenderer";
import { InputHandler } from "../../../util/inputHandler";

export class Player{
    
    private renderer: ImageRenderer;
	
	private dim: dim2;
	
	private spritesheet: SpriteSheet;
	
	private img: HTMLImageElement;
	private imgUnitSize: float2;
	
	private imgFrameNumber: number;
	private totalFrames: number;
		
    private inp: InputHandler;
	
	private frame: number;

    public constructor(renderer: ImageRenderer, pos: float2, size: float2, img: HTMLImageElement, unitSize: float2){
        this.renderer = renderer;
		
		this.dim = new dim2(pos.x,pos.y,size.x,size.y);
		
		this.imgUnitSize = unitSize;
		
		this.img = img;
		this.spritesheet = new SpriteSheet(this.img, this.imgUnitSize, {
			"l1":new float2(0,0),
            "l2":new float2(1,0),
            "l3":new float2(2,0),
            "l4":new float2(3,0),
            "l5":new float2(4,0),
            "l6":new float2(5,0),
            "l7":new float2(0,1),
            "l8":new float2(1,1)
		});
		this.totalFrames = 8;
		
		this.imgFrameNumber=1;
		this.frame = 0;
		
		this.inp = new InputHandler();
    }
	
	public update(){
		this.frame=(this.frame+1)%60;
                if(this.imgFrameNumber == 0){this.imgFrameNumber=1;}		
		if(this.frame%5 == 0){
			this.imgFrameNumber = (this.imgFrameNumber)%(this.totalFrames);
		}
		
		//console.log(this.inp.keys);
	}
	public render(){
		var loc: dim2 = this.spritesheet.getImage("l"+this.imgFrameNumber);
        
        this.renderer.drawImage(this.img,this.dim.x,this.dim.y,this.dim.width,this.dim.height,loc.x,loc.y,loc.width,loc.height);
	}
}