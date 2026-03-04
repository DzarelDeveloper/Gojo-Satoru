// ============================================================
//  SAT0RU CONFIG — Chỉnh tùy thích, reload page để thấy thay đổi
// ============================================================

const CONFIG = {

    // =================== PARTICLES ===================
    // Số hạt mỗi quả cầu (tổng = x2). Cao hơn = đẹp hơn nhưng lag hơn
    BALL_COUNT: 10000,

    // Kích thước base của mỗi hạt particle (Three.js PointsMaterial)
    PARTICLE_BASE_SIZE: 0.3,

    // =================== RED BALL (tay trái) ===================
    RED: {
        // Phần lõi cầu tròn
        coreRatio: 0.12,        // % hạt nằm ở lõi (0.0 - 1.0)
        coreRadius: 7,          // Bán kính lõi
        coreColor: { r: 3, g: 0.1, b: 0.1 },   // Màu lõi (giá trị > 1 = sáng hơn)
        coreSize: 2.5,          // Kích thước hạt lõi

        // Cánh tay xoắn spiral
        arms: 3,                // Số cánh xoắn
        spiralSpeed: 15,        // Tốc độ xoắn (cao hơn = xoắn tighter)
        spiralRadius: 30,       // Bán kính tối đa của spiral
        spiralStartRadius: 2,   // Bán kính bắt đầu
        spiralDepth: 8,         // Độ dày theo trục Z
        armColor: { r: 0.8, g: 0, b: 0 },
        armSize: 1.0,

        // Rotation
        rotationSpeed: -0.08,   // Tốc độ xoay (âm = ngược chiều kim đồng hồ)

        // Bloom & shake
        bloom: 2.5,
        shake: 0.25,
    },

    // =================== BLUE BALL (tay phải) ===================
    BLUE: {
        // Phần lõi cầu tròn
        coreRatio: 0.12,        // % hạt nằm ở lõi (0.0 - 1.0)
        coreRadius: 7,          // Bán kính lõi
        coreColor: { r: 0.2, g: 0.6, b: 3.0 },   // Tăng độ sáng (b > 1) để bloom mạnh bằng Red (3.0)
        coreSize: 2.5,          // Kích thước hạt lõi

        // Cánh tay xoắn spiral
        arms: 3,                // Số cánh xoắn
        spiralSpeed: 15,        // Tốc độ xoắn (cao hơn = xoắn tighter)
        spiralRadius: 30,       // Bán kính tối đa của spiral
        spiralStartRadius: 2,   // Bán kính bắt đầu
        spiralDepth: 8,         // Độ dày theo trục Z
        armColor: { r: 0, g: 0.2, b: 0.9 },
        armSize: 1.0,

        // Rotation
        rotationSpeed: -0.08,   // Tốc độ xoay (âm = ngược chiều kim đồng hồ)

        // Bloom & shake
        bloom: 2.5,
        shake: 0.25,
    },

    // =================== PURPLE (dung hợp) ===================
    PURPLE: {
        coreRatio: 0.8,         // 80% hạt ở lõi cầu, 20% bay xung quanh
        coreRadius: 12,
        coreColor: { r: 0.6, g: 0.5, b: 1.0 },
        coreSize: 1,

        outerSpread: 50,        // Hạt ngoài bay xa tới đâu
        outerColor: { r: 0.5, g: 0.5, b: 0.7 },
        outerSize: 0.8,

        rotationSpeedA: 0.15,   // Hệ red xoay
        rotationSpeedB: -0.12,  // Hệ blue xoay ngược
        rotationY: 0.03,

        fusionDistance: 220,     // Khoảng cách (px trên màn hình) để kích hoạt fusion

        bloom: 1,
        shake: 1,
    },

    // =================== FUSION ANIMATION (quay vòng hút nhau) ===================
    FUSION: {
        // Phase 1: Quỹ đạo xoay quanh nhau (binary star orbit)
        orbitSpeed: 0.08,           // Tốc độ xoay quanh tâm (rad/frame)
        orbitStartRadius: 20,       // Bán kính quỹ đạo ban đầu (world units)

        // Phase 2: Xoắn ốc hút vào nhau
        spiralShrinkRate: 0.97,     // Mỗi frame bán kính x= giá trị này (< 1 = hút vào)
        spiralSpeedUp: 1.02,        // Tốc độ xoay tăng dần
        collisionRadius: 2,        // Khi bán kính < giá trị này → va chạm

        // Phase 3: Vụ nổ + hình thành
        explosionDuration: 40,      // Số frame vụ nổ
        explosionScatter: 60,       // Hạt bay xa tới đâu lúc nổ
        explosionBloom: 6.0,        // Bloom lúc nổ
        explosionShake: 1.5,        // Rung lúc nổ
        reformSpeed: 0.08,          // Tốc độ hạt quay về dạng cầu tím

        // Hiệu ứng khi đang orbit
        orbitBloom: 3.5,
        orbitShake: 0.3,
    },

    // =================== UNLIMITED VOID ===================
    VOID: {
        ringRadius: 22,             // Bán kính vòng accretion chính
        ringColor: { r: 1, g: 1, b: 1 },
        ringSize: 2.5,

        outerMinRadius: 25,
        outerMaxRadius: 95,
        outerColor: { r: 0.1, g: 0.6, b: 1.0 },
        outerSize: 0.7,

        rotationZ: 0.004,           // Tốc độ xoay quanh trục Z
        rotationX: 0.001,           // Tốc độ xoay quanh trục X (tạo cảm giác 3D)

        bloom: 3,
        shake: 0,

        posX: 0,  // x âm = trái, x dương = phải
        posY: -5,   // y dương = trên, y âm = dưới
        posZ: 0,

        // Warp speed intro (du hành thời gian)
        warpDuration: 60,          // Số frame warp intro (tăng lên = lâu hơn)
        warpSpeed: 10,             // Tốc độ bay ngang cực nhanh (tạo vệt dài)
        warpBloom: 5.0,             // Bloom rực rỡ
        warpShake: 2.0,             // Rung mạnh hơn
    },

    // =================== BLOOM (post-processing) ===================
    BLOOM: {
        defaultStrength: 1.8,   // Mặc định khi khởi tạo
        radius: 0.4,
        threshold: 0.85,
    },

    // =================== GESTURE DETECTION ===================
    DETECTION: {
        crossedFingerThreshold: 0.045,  // Khoảng cách tip để coi là bắt chéo
        snapCooldownFrames: 30,         // Frame cooldown sau mỗi lần bắn (chỉ tay)
        chargeFrames: 20,               // Số frame giữ 3 ngón trước khi bắn (~1 giây)
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.6,
    },

    // =================== ANIMATION ===================
    ANIMATION: {
        positionLerpSpeed: 0.5,    // Tốc độ di chuyển quả cầu theo tay (0-1)
        morphLerpSpeed: 0.1,        // Tốc độ morph hạt sang hình mới
        fadeInSpeed: 0.08,          // Tốc độ xuất hiện
        fadeOutSpeed: 0.04,         // Tốc độ biến mất
        shakeMultiplier: 12,        // Cường độ rung màn hình
        neutralRotation: 0.005,     // Xoay khi không có technique
    },

    // =================== PROJECTILE (búng tay) ===================
    PROJECTILE: {
        speed: 20,             // Tốc độ bay cơ bản
        duration: 100,          // Số frame bay (đủ lâu để bay qua camera)
        redDirection: { x: 1, y: 0.2, z: 1 },     // Bay thẳng về phía người xem
        blueDirection: { x: -1, y: 0.2, z: 1 },    // Bay thẳng về phía người xem
        purpleDirection: { x: 0, y: 0.2, z: 1 },  // Bay thẳng về phía người xem
    },

    // =================== CAMERA ===================
    CAMERA: {
        width: 1280,
        height: 720,
        cameraZ: 55,            // Khoảng cách camera 3D
        fov: 75,                // Field of view
    },

    // =================== DEBUG ===================
    DEBUG: {
        showLandmarks: true,    // Hiện skeleton tay lên màn hình (true/false)
    },
};

export default CONFIG;
