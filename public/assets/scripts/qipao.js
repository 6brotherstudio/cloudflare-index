// 获取所有的li元素
const logos = document.querySelectorAll('.vlt-partners li');
// 获取类名为.vlt-partners下的所有li元素

logos.forEach(logo => {
    // 获取每个li中的tooltip文本
    const tooltipText = logo.getAttribute('data-tooltip');
    // 从每个li元素中获取data-tooltip属性的值

    // 创建tooltip气泡
    const tooltip = document.createElement('div');
    // 创建一个div元素作为tooltip气泡
    tooltip.classList.add('tooltip');
    // 为tooltip添加类名tooltip
    tooltip.innerText = tooltipText;
    // 设置tooltip的文本内容为data-tooltip的值
    tooltip.style.width = '200px';
    // 限制气泡宽度为200像素
    tooltip.style.textAlign = 'center';
    // 让气泡文字居中显示
    logo.appendChild(tooltip);
    // 将tooltip添加到当前li元素中

    // 点击LOGO时显示或隐藏气泡
    logo.addEventListener('click', () => {
        // 为当前li元素添加点击事件监听器
        const isActive = logo.classList.toggle('active');
        // 切换active类名，返回是否激活的状态
        if (isActive) {
            tooltip.style.transform = 'translateY(100px)';
            // 如果激活，设置气泡向下偏移100像素
        } else {
            tooltip.style.transform = '';
            // 如果未激活，重置气泡位置
        }
        logos.forEach(otherLogo => {
            // 遍历所有li元素
            if (otherLogo !== logo) {
                // 如果不是当前点击的li元素
                otherLogo.classList.remove('active');
                // 移除active类名
                const otherTooltip = otherLogo.querySelector('.tooltip');
                // 获取其他li元素中的tooltip
                if (otherTooltip) otherTooltip.style.transform = '';
                // 如果存在tooltip，重置其位置
            }
        });
    });

    // 鼠标移入时显示气泡
    logo.addEventListener('mouseenter', () => {
        // 为当前li元素添加鼠标移入事件监听器
        logos.forEach(otherLogo => {
            // 遍历所有li元素
            if (otherLogo !== logo) {
                // 如果不是当前移入的li元素
                otherLogo.classList.remove('active');
                // 移除active类名
                const otherTooltip = otherLogo.querySelector('.tooltip');
                // 获取其他li元素中的tooltip
                if (otherTooltip) otherTooltip.style.transform = '';
                // 如果存在tooltip，重置其位置
            }
        });
        logo.classList.add('active');
        // 为当前li元素添加active类名
        tooltip.style.transform = 'translateY(100px)';
        // 设置气泡向下偏移100像素
    });

    // 鼠标移出时隐藏气泡
    logo.addEventListener('mouseleave', () => {
        // 为当前li元素添加鼠标移出事件监听器
        logo.classList.remove('active');
        // 移除active类名
        tooltip.style.transform = '';
        // 重置气泡位置
    });
});
