import { TestSlider } from "../../components/slider/slider";
import { MoveableStory } from "../../stories/moveable/moveable.stories";

const Test = () => {
    return (
        <>
            <TestSlider />
        </>
    );
};

export const MouseMoveTest: MoveableStory = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <Test />,
};
