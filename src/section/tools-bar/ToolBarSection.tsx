import { AiFillAlert, AiFillAmazonCircle } from 'react-icons/ai';
import { BsArrowReturnLeft, BsArrowReturnRight } from 'react-icons/bs';
import ToolBar from 'src/components/tools-bar';

export default function ToolBarSection() {
	return (
		<ToolBar.Root>
			<ToolBar.Section>
				<ToolBar.Button>
					<BsArrowReturnLeft />
				</ToolBar.Button>
				<ToolBar.Button>
					<BsArrowReturnRight />
				</ToolBar.Button>
			</ToolBar.Section>
			<ToolBar.Divisor />
			<ToolBar.Section>
				<ToolBar.Button>
					<AiFillAlert />
				</ToolBar.Button>
				<ToolBar.Button>
					<AiFillAmazonCircle />
				</ToolBar.Button>
			</ToolBar.Section>
		</ToolBar.Root>
	);
}
