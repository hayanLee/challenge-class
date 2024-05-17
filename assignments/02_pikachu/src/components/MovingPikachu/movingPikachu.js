export default function addArrowKeyListener(target) {
    const step = 90;
    let topPosition = 0;
    let leftPosition = 0;
    let isRight = true;
    let isJumping = false;

    function handleKeyDown(e) {
        switch (e.code) {
            case 'ArrowUp':
                topPosition = Math.max(0, topPosition - step);
                break;
            case 'ArrowDown':
                topPosition = Math.min(810, topPosition + step);
                break;
            case 'ArrowLeft':
                leftPosition = Math.max(0, leftPosition - step);
                if (isRight) {
                    target.style.transform = 'scale(-1, 1)';
                    target.style.transition = '0.2s';
                    isRight = false;
                }
                break;
            case 'ArrowRight':
                leftPosition = Math.min(810, leftPosition + step);
                if (!isRight) {
                    target.style.transform = 'scale(1, 1)';
                    target.style.transition = '0.2s';
                    isRight = true;
                }
                break;
            case 'Space':
                if (!isJumping) {
                    isJumping = true;
                    let initPosition = topPosition; // 처음 top
                    topPosition = Math.max(0, topPosition - 15); // 점프 후 top
                    target.style.top = `${topPosition}px`;
                    setTimeout(() => {
                        topPosition = initPosition; // 처음 위치로 이동
                        target.style.top = `${topPosition}px`;
                        isJumping = false;
                    }, 200);
                }
                break;
            default:
                return;
        }

        target.style.top = `${topPosition}px`;
        target.style.left = `${leftPosition}px`;
    }

    document.addEventListener('keydown', handleKeyDown);
}
