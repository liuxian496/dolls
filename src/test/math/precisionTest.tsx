import { Summary, Color } from "litten";

import { MathStory } from "../../stories/math/math.stories";

const Test = () => {
    return (
        <>
            <div>
                <p>0.1+0.2={0.1 + 0.2}</p>
                <p>0.1+0.7={0.1 + 0.7}</p>
                <p>0.2+0.4={0.7 + 0.1}</p>
                <p>0.3-0.1={0.3 - 0.1}</p>
                <p>18.9*100={18.9 * 100}</p>
                <p>0.3/0.1={0.3 / 0.1}</p>
            </div>
            <Summary>
                <p>
                    计算机存储双精度浮点数时，需要先把十进制数转换成为二进制的科学记数法。
                </p>
                <p>
                    然后计算机按照【符号位】+【指数位】+【指数偏移量的二进制】+【小数部分】的方式存储二进制的科学记数法。
                </p>
                <p>
                    因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现<code>无限循环</code>，会造成二进制的舍入操作(0舍1入)，再转换为十进制时就会造成误差。
                </p>
            </Summary>
        </>
    );
};

export const PrecisionTest: MathStory = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <Test />,
};
