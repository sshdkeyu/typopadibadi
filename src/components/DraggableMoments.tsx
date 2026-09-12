import {
	DraggableCardBody,
	DraggableCardContainer,
} from "@/components/ui/draggable-card";
import type { Moment } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
	items: readonly Moment[];
};

export default function DraggableMoments({ items }: Props) {
	return (
		<DraggableCardContainer className="pointer-events-none fixed inset-0 z-0 isolate hidden overflow-hidden xl:block">
			{items.map((item) => (
				<div
					key={item.title}
					className="pointer-events-none absolute"
					style={{
						top: item.top,
						right: item.right,
						transform: `rotate(${item.rotate}deg)`,
					}}
				>
					<DraggableCardBody
						label={item.title}
						className="pointer-events-auto min-h-0 w-[200px] p-2 shadow-lg [transform-style:flat]"
					>
						<img
							src={item.image}
							alt={item.title}
							className={cn(
								"pointer-events-none relative z-10 h-28 w-full object-cover",
								item.imageClass,
							)}
						/>
						<h3 className="mt-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
							{item.title}
						</h3>
					</DraggableCardBody>
				</div>
			))}
		</DraggableCardContainer>
	);
}
