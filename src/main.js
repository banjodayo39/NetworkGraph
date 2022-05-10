
//initilization of visualization
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
const colors =   [
    '#d62728',
    '#2ca02c',
    '#1f77b4',
    '#bcbd22',
    '#9467bd',
    '#17becf',
    '#ff7f0e',
    '#8c564b',
    '#e377c2',
    '#ff9896',
    '#98df8a',
    '#aec7e8',
    '#dbdb8d',
    '#c5b0d5',
    '#9edae5',
    '#ffbb78',
    '#c49c94',
    '#f7b6d2',
  ]

  const colorSchemes = {
    VIRIDIS: d3.scaleLinear()
      .domain([0, 0.004830918, 0.009661836, 0.014492754, 0.019323671, 0.024154589, 0.028985507, 0.033816425, 0.038647343, 0.043478261, 0.048309179, 0.053140097, 0.057971014, 0.062801932, 0.06763285, 0.072463768, 0.077294686, 0.082125604, 0.086956522, 0.09178744, 0.096618357, 0.101449275, 0.106280193, 0.111111111, 0.115942029, 0.120772947, 0.125603865, 0.130434783, 0.1352657, 0.140096618, 0.144927536, 0.149758454, 0.154589372, 0.15942029, 0.164251208, 0.169082126, 0.173913043, 0.178743961, 0.183574879, 0.188405797, 0.193236715, 0.198067633, 0.202898551, 0.207729469, 0.212560386, 0.217391304, 0.222222222, 0.22705314, 0.231884058, 0.236714976, 0.241545894, 0.246376812, 0.251207729, 0.256038647, 0.260869565, 0.265700483, 0.270531401, 0.275362319, 0.280193237, 0.285024155, 0.289855072, 0.29468599, 0.299516908, 0.304347826, 0.309178744, 0.314009662, 0.31884058, 0.323671498, 0.328502415, 0.333333333, 0.338164251, 0.342995169, 0.347826087, 0.352657005, 0.357487923, 0.362318841, 0.367149758, 0.371980676, 0.376811594, 0.381642512, 0.38647343, 0.391304348, 0.396135266, 0.400966184, 0.405797101, 0.410628019, 0.415458937, 0.420289855, 0.425120773, 0.429951691, 0.434782609, 0.439613527, 0.444444444, 0.449275362, 0.45410628, 0.458937198, 0.463768116, 0.468599034, 0.473429952, 0.47826087, 0.483091787, 0.487922705, 0.492753623, 0.497584541, 0.502415459, 0.507246377, 0.512077295, 0.516908213, 0.52173913, 0.526570048, 0.531400966, 0.536231884, 0.541062802, 0.54589372, 0.550724638, 0.555555556, 0.560386473, 0.565217391, 0.570048309, 0.574879227, 0.579710145, 0.584541063, 0.589371981, 0.594202899, 0.599033816, 0.603864734, 0.608695652, 0.61352657, 0.618357488, 0.623188406, 0.628019324, 0.632850242, 0.637681159, 0.642512077, 0.647342995, 0.652173913, 0.657004831, 0.661835749, 0.666666667, 0.671497585, 0.676328502, 0.68115942, 0.685990338, 0.690821256, 0.695652174, 0.700483092, 0.70531401, 0.710144928, 0.714975845, 0.719806763, 0.724637681, 0.729468599, 0.734299517, 0.739130435, 0.743961353, 0.748792271, 0.753623188, 0.758454106, 0.763285024, 0.768115942, 0.77294686, 0.777777778, 0.782608696, 0.787439614, 0.792270531, 0.797101449, 0.801932367, 0.806763285, 0.811594203, 0.816425121, 0.821256039, 0.826086957, 0.830917874, 0.835748792, 0.84057971, 0.845410628, 0.850241546, 0.855072464, 0.859903382, 0.8647343, 0.869565217, 0.874396135, 0.879227053, 0.884057971, 0.888888889, 0.893719807, 0.898550725, 0.903381643, 0.90821256, 0.913043478, 0.917874396, 0.922705314, 0.927536232, 0.93236715, 0.937198068, 0.942028986, 0.946859903, 0.951690821, 0.956521739, 0.961352657, 0.966183575, 0.971014493, 0.975845411, 0.980676329, 0.985507246, 0.990338164, 0.995169082, 1])
      .range([rgb(66, 64, 134), rgb(66, 65, 134), rgb(65, 66, 135), rgb(65, 68, 135), rgb(64, 69, 136), rgb(64, 70, 136), rgb(63, 71, 136), rgb(63, 72, 137), rgb(62, 73, 137), rgb(62, 74, 137), rgb(62, 76, 138), rgb(61, 77, 138), rgb(61, 78, 138), rgb(60, 79, 138), rgb(60, 80, 139), rgb(59, 81, 139), rgb(59, 82, 139), rgb(58, 83, 139), rgb(58, 84, 140), rgb(57, 85, 140), rgb(57, 86, 140), rgb(56, 88, 140), rgb(56, 89, 140), rgb(55, 90, 140), rgb(55, 91, 141), rgb(54, 92, 141), rgb(54, 93, 141), rgb(53, 94, 141), rgb(53, 95, 141), rgb(52, 96, 141), rgb(52, 97, 141), rgb(51, 98, 141), rgb(51, 99, 141), rgb(50, 100, 142), rgb(50, 101, 142), rgb(49, 102, 142), rgb(49, 103, 142), rgb(49, 104, 142), rgb(48, 105, 142), rgb(48, 106, 142), rgb(47, 107, 142), rgb(47, 108, 142), rgb(46, 109, 142), rgb(46, 110, 142), rgb(46, 111, 142), rgb(45, 112, 142), rgb(45, 113, 142), rgb(44, 113, 142), rgb(44, 114, 142), rgb(44, 115, 142), rgb(43, 116, 142), rgb(43, 117, 142), rgb(42, 118, 142), rgb(42, 119, 142), rgb(42, 120, 142), rgb(41, 121, 142), rgb(41, 122, 142), rgb(41, 123, 142), rgb(40, 124, 142), rgb(40, 125, 142), rgb(39, 126, 142), rgb(39, 127, 142), rgb(39, 128, 142), rgb(38, 129, 142), rgb(38, 130, 142), rgb(38, 130, 142), rgb(37, 131, 142), rgb(37, 132, 142), rgb(37, 133, 142), rgb(36, 134, 142), rgb(36, 135, 142), rgb(35, 136, 142), rgb(35, 137, 142), rgb(35, 138, 141), rgb(34, 139, 141), rgb(34, 140, 141), rgb(34, 141, 141), rgb(33, 142, 141), rgb(33, 143, 141), rgb(33, 144, 141), rgb(33, 145, 140), rgb(32, 146, 140), rgb(32, 146, 140), rgb(32, 147, 140), rgb(31, 148, 140), rgb(31, 149, 139), rgb(31, 150, 139), rgb(31, 151, 139), rgb(31, 152, 139), rgb(31, 153, 138), rgb(31, 154, 138), rgb(30, 155, 138), rgb(30, 156, 137), rgb(30, 157, 137), rgb(31, 158, 137), rgb(31, 159, 136), rgb(31, 160, 136), rgb(31, 161, 136), rgb(31, 161, 135), rgb(31, 162, 135), rgb(32, 163, 134), rgb(32, 164, 134), rgb(33, 165, 133), rgb(33, 166, 133), rgb(34, 167, 133), rgb(34, 168, 132), rgb(35, 169, 131), rgb(36, 170, 131), rgb(37, 171, 130), rgb(37, 172, 130), rgb(38, 173, 129), rgb(39, 173, 129), rgb(40, 174, 128), rgb(41, 175, 127), rgb(42, 176, 127), rgb(44, 177, 126), rgb(45, 178, 125), rgb(46, 179, 124), rgb(47, 180, 124), rgb(49, 181, 123), rgb(50, 182, 122), rgb(52, 182, 121), rgb(53, 183, 121), rgb(55, 184, 120), rgb(56, 185, 119), rgb(58, 186, 118), rgb(59, 187, 117), rgb(61, 188, 116), rgb(63, 188, 115), rgb(64, 189, 114), rgb(66, 190, 113), rgb(68, 191, 112), rgb(70, 192, 111), rgb(72, 193, 110), rgb(74, 193, 109), rgb(76, 194, 108), rgb(78, 195, 107), rgb(80, 196, 106), rgb(82, 197, 105), rgb(84, 197, 104), rgb(86, 198, 103), rgb(88, 199, 101), rgb(90, 200, 100), rgb(92, 200, 99), rgb(94, 201, 98), rgb(96, 202, 96), rgb(99, 203, 95), rgb(101, 203, 94), rgb(103, 204, 92), rgb(105, 205, 91), rgb(108, 205, 90), rgb(110, 206, 88), rgb(112, 207, 87), rgb(115, 208, 86), rgb(117, 208, 84), rgb(119, 209, 83), rgb(122, 209, 81), rgb(124, 210, 80), rgb(127, 211, 78), rgb(129, 211, 77), rgb(132, 212, 75), rgb(134, 213, 73), rgb(137, 213, 72), rgb(139, 214, 70), rgb(142, 214, 69), rgb(144, 215, 67), rgb(147, 215, 65), rgb(149, 216, 64), rgb(152, 216, 62), rgb(155, 217, 60), rgb(157, 217, 59), rgb(160, 218, 57), rgb(162, 218, 55), rgb(165, 219, 54), rgb(168, 219, 52), rgb(170, 220, 50), rgb(173, 220, 48), rgb(176, 221, 47), rgb(178, 221, 45), rgb(181, 222, 43), rgb(184, 222, 41), rgb(186, 222, 40), rgb(189, 223, 38), rgb(192, 223, 37), rgb(194, 223, 35), rgb(197, 224, 33), rgb(200, 224, 32), rgb(202, 225, 31), rgb(205, 225, 29), rgb(208, 225, 28), rgb(210, 226, 27), rgb(213, 226, 26), rgb(216, 226, 25), rgb(218, 227, 25), rgb(221, 227, 24), rgb(223, 227, 24), rgb(226, 228, 24), rgb(229, 228, 25), rgb(231, 228, 25), rgb(234, 229, 26), rgb(236, 229, 27), rgb(239, 229, 28), rgb(241, 229, 29), rgb(244, 230, 30), rgb(246, 230, 32), rgb(248, 230, 33), rgb(251, 231, 35), rgb(253, 231, 37)])
      .clamp(true),
    PLASMA: d3.scaleLinear()
      .domain([0, 0.004830918, 0.009661836, 0.014492754, 0.019323671, 0.024154589, 0.028985507, 0.033816425, 0.038647343, 0.043478261, 0.048309179, 0.053140097, 0.057971014, 0.062801932, 0.06763285, 0.072463768, 0.077294686, 0.082125604, 0.086956522, 0.09178744, 0.096618357, 0.101449275, 0.106280193, 0.111111111, 0.115942029, 0.120772947, 0.125603865, 0.130434783, 0.1352657, 0.140096618, 0.144927536, 0.149758454, 0.154589372, 0.15942029, 0.164251208, 0.169082126, 0.173913043, 0.178743961, 0.183574879, 0.188405797, 0.193236715, 0.198067633, 0.202898551, 0.207729469, 0.212560386, 0.217391304, 0.222222222, 0.22705314, 0.231884058, 0.236714976, 0.241545894, 0.246376812, 0.251207729, 0.256038647, 0.260869565, 0.265700483, 0.270531401, 0.275362319, 0.280193237, 0.285024155, 0.289855072, 0.29468599, 0.299516908, 0.304347826, 0.309178744, 0.314009662, 0.31884058, 0.323671498, 0.328502415, 0.333333333, 0.338164251, 0.342995169, 0.347826087, 0.352657005, 0.357487923, 0.362318841, 0.367149758, 0.371980676, 0.376811594, 0.381642512, 0.38647343, 0.391304348, 0.396135266, 0.400966184, 0.405797101, 0.410628019, 0.415458937, 0.420289855, 0.425120773, 0.429951691, 0.434782609, 0.439613527, 0.444444444, 0.449275362, 0.45410628, 0.458937198, 0.463768116, 0.468599034, 0.473429952, 0.47826087, 0.483091787, 0.487922705, 0.492753623, 0.497584541, 0.502415459, 0.507246377, 0.512077295, 0.516908213, 0.52173913, 0.526570048, 0.531400966, 0.536231884, 0.541062802, 0.54589372, 0.550724638, 0.555555556, 0.560386473, 0.565217391, 0.570048309, 0.574879227, 0.579710145, 0.584541063, 0.589371981, 0.594202899, 0.599033816, 0.603864734, 0.608695652, 0.61352657, 0.618357488, 0.623188406, 0.628019324, 0.632850242, 0.637681159, 0.642512077, 0.647342995, 0.652173913, 0.657004831, 0.661835749, 0.666666667, 0.671497585, 0.676328502, 0.68115942, 0.685990338, 0.690821256, 0.695652174, 0.700483092, 0.70531401, 0.710144928, 0.714975845, 0.719806763, 0.724637681, 0.729468599, 0.734299517, 0.739130435, 0.743961353, 0.748792271, 0.753623188, 0.758454106, 0.763285024, 0.768115942, 0.77294686, 0.777777778, 0.782608696, 0.787439614, 0.792270531, 0.797101449, 0.801932367, 0.806763285, 0.811594203, 0.816425121, 0.821256039, 0.826086957, 0.830917874, 0.835748792, 0.84057971, 0.845410628, 0.850241546, 0.855072464, 0.859903382, 0.8647343, 0.869565217, 0.874396135, 0.879227053, 0.884057971, 0.888888889, 0.893719807, 0.898550725, 0.903381643, 0.90821256, 0.913043478, 0.917874396, 0.922705314, 0.927536232, 0.93236715, 0.937198068, 0.942028986, 0.946859903, 0.951690821, 0.956521739, 0.961352657, 0.966183575, 0.971014493, 0.975845411, 0.980676329, 0.985507246, 0.990338164, 0.995169082, 1])
      .range([rgb(102, 0, 167), rgb(103, 0, 168), rgb(105, 0, 168), rgb(106, 0, 168), rgb(108, 0, 168), rgb(110, 0, 168), rgb(111, 0, 168), rgb(113, 0, 168), rgb(114, 1, 168), rgb(116, 1, 168), rgb(117, 1, 168), rgb(119, 1, 168), rgb(120, 1, 168), rgb(122, 2, 168), rgb(123, 2, 168), rgb(125, 3, 168), rgb(126, 3, 168), rgb(128, 4, 168), rgb(129, 4, 167), rgb(131, 5, 167), rgb(132, 5, 167), rgb(134, 6, 166), rgb(135, 7, 166), rgb(136, 8, 166), rgb(138, 9, 165), rgb(139, 10, 165), rgb(141, 11, 165), rgb(142, 12, 164), rgb(143, 13, 164), rgb(145, 14, 163), rgb(146, 15, 163), rgb(148, 16, 162), rgb(149, 17, 161), rgb(150, 19, 161), rgb(152, 20, 160), rgb(153, 21, 159), rgb(154, 22, 159), rgb(156, 23, 158), rgb(157, 24, 157), rgb(158, 25, 157), rgb(160, 26, 156), rgb(161, 27, 155), rgb(162, 29, 154), rgb(163, 30, 154), rgb(165, 31, 153), rgb(166, 32, 152), rgb(167, 33, 151), rgb(168, 34, 150), rgb(170, 35, 149), rgb(171, 36, 148), rgb(172, 38, 148), rgb(173, 39, 147), rgb(174, 40, 146), rgb(176, 41, 145), rgb(177, 42, 144), rgb(178, 43, 143), rgb(179, 44, 142), rgb(180, 46, 141), rgb(181, 47, 140), rgb(182, 48, 139), rgb(183, 49, 138), rgb(184, 50, 137), rgb(186, 51, 136), rgb(187, 52, 136), rgb(188, 53, 135), rgb(189, 55, 134), rgb(190, 56, 133), rgb(191, 57, 132), rgb(192, 58, 131), rgb(193, 59, 130), rgb(194, 60, 129), rgb(195, 61, 128), rgb(196, 62, 127), rgb(197, 64, 126), rgb(198, 65, 125), rgb(199, 66, 124), rgb(200, 67, 123), rgb(201, 68, 122), rgb(202, 69, 122), rgb(203, 70, 121), rgb(204, 71, 120), rgb(204, 73, 119), rgb(205, 74, 118), rgb(206, 75, 117), rgb(207, 76, 116), rgb(208, 77, 115), rgb(209, 78, 114), rgb(210, 79, 113), rgb(211, 81, 113), rgb(212, 82, 112), rgb(213, 83, 111), rgb(213, 84, 110), rgb(214, 85, 109), rgb(215, 86, 108), rgb(216, 87, 107), rgb(217, 88, 106), rgb(218, 90, 106), rgb(218, 91, 105), rgb(219, 92, 104), rgb(220, 93, 103), rgb(221, 94, 102), rgb(222, 95, 101), rgb(222, 97, 100), rgb(223, 98, 99), rgb(224, 99, 99), rgb(225, 100, 98), rgb(226, 101, 97), rgb(226, 102, 96), rgb(227, 104, 95), rgb(228, 105, 94), rgb(229, 106, 93), rgb(229, 107, 93), rgb(230, 108, 92), rgb(231, 110, 91), rgb(231, 111, 90), rgb(232, 112, 89), rgb(233, 113, 88), rgb(233, 114, 87), rgb(234, 116, 87), rgb(235, 117, 86), rgb(235, 118, 85), rgb(236, 119, 84), rgb(237, 121, 83), rgb(237, 122, 82), rgb(238, 123, 81), rgb(239, 124, 81), rgb(239, 126, 80), rgb(240, 127, 79), rgb(240, 128, 78), rgb(241, 129, 77), rgb(241, 131, 76), rgb(242, 132, 75), rgb(243, 133, 75), rgb(243, 135, 74), rgb(244, 136, 73), rgb(244, 137, 72), rgb(245, 139, 71), rgb(245, 140, 70), rgb(246, 141, 69), rgb(246, 143, 68), rgb(247, 144, 68), rgb(247, 145, 67), rgb(247, 147, 66), rgb(248, 148, 65), rgb(248, 149, 64), rgb(249, 151, 63), rgb(249, 152, 62), rgb(249, 154, 62), rgb(250, 155, 61), rgb(250, 156, 60), rgb(250, 158, 59), rgb(251, 159, 58), rgb(251, 161, 57), rgb(251, 162, 56), rgb(252, 163, 56), rgb(252, 165, 55), rgb(252, 166, 54), rgb(252, 168, 53), rgb(252, 169, 52), rgb(253, 171, 51), rgb(253, 172, 51), rgb(253, 174, 50), rgb(253, 175, 49), rgb(253, 177, 48), rgb(253, 178, 47), rgb(253, 180, 47), rgb(253, 181, 46), rgb(254, 183, 45), rgb(254, 184, 44), rgb(254, 186, 44), rgb(254, 187, 43), rgb(254, 189, 42), rgb(254, 190, 42), rgb(254, 192, 41), rgb(253, 194, 41), rgb(253, 195, 40), rgb(253, 197, 39), rgb(253, 198, 39), rgb(253, 200, 39), rgb(253, 202, 38), rgb(253, 203, 38), rgb(252, 205, 37), rgb(252, 206, 37), rgb(252, 208, 37), rgb(252, 210, 37), rgb(251, 211, 36), rgb(251, 213, 36), rgb(251, 215, 36), rgb(250, 216, 36), rgb(250, 218, 36), rgb(249, 220, 36), rgb(249, 221, 37), rgb(248, 223, 37), rgb(248, 225, 37), rgb(247, 226, 37), rgb(247, 228, 37), rgb(246, 230, 38), rgb(246, 232, 38), rgb(245, 233, 38), rgb(245, 235, 39), rgb(244, 237, 39), rgb(243, 238, 39), rgb(243, 240, 39), rgb(242, 242, 39), rgb(241, 244, 38), rgb(241, 245, 37), rgb(240, 247, 36), rgb(240, 249, 33)])
      .clamp(true),
    RAINBOW: d3.scaleLinear()
      .domain([0, 0.33, 0.5, 0.66, 1])
      .range([rgb(0, 0, 255), rgb(0, 255, 255), rgb(0, 255, 0), rgb(255, 255, 0), rgb(255, 0, 0)])
      .clamp(true),
    YELLOW_GREEN_BLUE: d3.scaleLinear()
      .domain([0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1])
      .range([rgb(255, 255, 217), rgb(237, 248, 177), rgb(199, 233, 180), rgb(127, 205, 187), rgb(65, 182, 196), rgb(29, 145, 192), rgb(34, 94, 168), rgb(37, 52, 148), rgb(8, 29, 88)])
      .clamp(true),
    PURPLE_BLUE_GREEN: d3.scaleLinear()
      .domain([0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1])
      .range([rgb(255, 247, 251), rgb(236, 226, 240), rgb(208, 209, 230), rgb(166, 189, 219), rgb(103, 169, 207), rgb(54, 144, 192), rgb(2, 129, 138), rgb(1, 108, 89), rgb(1, 70, 54)])
      .clamp(true),
    GREEN_BLUE: d3.scaleLinear()
      .domain([0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1])
      .range([rgb(247, 252, 240), rgb(224, 243, 219), rgb(204, 235, 197), rgb(168, 221, 181), rgb(123, 204, 196), rgb(78, 179, 211), rgb(43, 140, 190), rgb(8, 104, 172), rgb(8, 64, 129)])
      .clamp(true)
  };

// Visualization.
const canvasMargin = 40;
const circleMinDiameter = 5;
const circleAvgDiameter = 16;
const lineMinMaxWidth = [1, 28];
const lineMinWidth = 0.1;
const lineAvgWidth = 1.5;
const labelMinFontSize = 9;
const labelFontSizeScalingConstant = 4;
const scoreColorLegendPropScoresBetweenMinAndMax = 0.8;
const scoreColorLegendDesiredNTicks = 5;
const zoomExtent = [0.5, 200];
const zoomScaleFactor = 2;
const itemZoomLevel = 3;
const TRANSITION_STRENTH_DARK_COLOR = 0.15;
const TRANSITION_STRENTH_LIGHT_COLOR= 0.45;


var options = {
    particleColor: "rgba(255,255,255)",
    lineColor: "rgba(0,181,255)",
    particleAmount: 40,
    defaultRadius: 2,
    variantRadius: 2,
    defaultSpeed: 1,
    variantSpeed: 1,
    linkRadius: 300
};

    var rgb = options.lineColor.match(/\d+/g);

window.addEventListener('resize', function(){
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

});

// const mouse = {
//     x: 100,
//     y: 100,
// }

// canvas.addEventListener('click', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y
//     drawCircle();
// });

function drawCircle(){
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}

class Particle{

    constructor(){
        this.x = Math.random() * canvas.width;
        this.y =  Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(){
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    drawItemCircle(){

    }
}

const getControlPointsCurvedLink = (x1, x2, y1, y2) => {
    const alpha = 0.3;
    const xm = (x1 + x2) / 2;
    const ym = (y1 + y2) / 2;
    const sign = -1; // (outerCurved ? 1 : -1);
    const x3 = xm + sign * alpha * (y2 - y1);
    const y3 = ym - sign * alpha * (x2 - x1);
    return { x: x3, y: y3 };
  };


function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

function linkPoints(point, hubs, start, end) {
    for (var i = start; i < end; i++) {
        var distance = checkDistance(point._cx, point._cy, hubs[i]._cx, hubs[i]._cy);
        const cp = getControlPointsCurvedLink(point._cx, hubs[i]._cx, point._cy, hubs[i]._cy);

        var opacity = 1 - distance / options.linkRadius;
        if (opacity > 0) {
            ctx.lineWidth = 0.5;

            if(point.isUp){
                ctx.strokeStyle = "#00FF00";
            }else{
                ctx.strokeStyle = "#FF0000";
            }
            
            ctx.beginPath();
            ctx.moveTo(point._cx, point._cy);
            ctx.quadraticCurveTo(cp.x, cp.y, hubs[i]._cx, hubs[i]._cy);
            ctx.stroke();
        }
    }
}

function checkDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function _calcLightColor(color, transitionStrength = 0.7) {
    const lightColor = lab(color);
    lightColor.l = (1 - transitionStrength) * lightColor.l + transitionStrength * 100;
    return lightColor;
  }

function _calcDarkColor(color, transitionStrength = 0) {
    const darkColor = lab(color);
    darkColor.l *= (1 - transitionStrength);
    return darkColor;
  }


class State{
    constructor(){
        this.zTransform = { x: 0, y: 0, k: 1 };
        this.pixelRatio = window.devicePixelRatio || 1;
        this.items = []
        this.canvasMargin = { left: canvasMargin, right: canvasMargin, top: canvasMargin, bottom: canvasMargin };
        this.zoomSquare = undefined;
        this.weightKeys = [];
        this.weightKey = undefined;

    }

    setCanvasSize(canvasWidth, canvasHeight) {
        this.canvasPixelWidth = canvasWidth * this.pixelRatio;
        this.canvasPixelHeight = canvasHeight * this.pixelRatio;
      }

    updateTestD3(){
    
    }

    updateItemPixelPositionAndScaling(){

        const marginPixelLeft = this.canvasMargin.left * this.pixelRatio;
        const marginPixelRight = this.canvasMargin.right * this.pixelRatio;
        const marginPixelTop = this.canvasMargin.top * this.pixelRatio;
        const marginPixelBottom = this.canvasMargin.bottom * this.pixelRatio;

        const [minX, maxX] = d3.extent(this.items.map(item => +item.x));
        const [minY, maxY] = d3.extent(this.items.map(item => +item.y));
    
        const logicalWidth = maxX - minX;
        const logicalHeigth = maxY - minY;
        const pixelWidth = this.canvasPixelWidth - marginPixelLeft - marginPixelRight;
        const pixelHeight = this.canvasPixelHeight - marginPixelTop - marginPixelBottom;
        const minScalingFactor = Math.min(pixelWidth / logicalWidth, pixelHeight / logicalHeigth);
        const deltaPixelX = (pixelWidth - minScalingFactor * logicalWidth) / 2;
        const deltaPixelY = (pixelHeight - minScalingFactor * logicalHeigth) / 2;
    
        const cxScale = d3.scaleLinear().domain([minX, maxX]).range([deltaPixelX + marginPixelLeft, minScalingFactor * logicalWidth + deltaPixelX + marginPixelLeft]);
        const cyScale = d3.scaleLinear().domain([minY, maxY]).range([minScalingFactor * logicalHeigth + deltaPixelY + marginPixelTop, deltaPixelY + marginPixelTop]);
        this.items.forEach(item => {
          if (!item) return;
          item._cx = cxScale(+item.x);
          item._cy = cyScale(+item.y);
        });
    
        this.zoomSquare = [[0, 0], [this.canvasPixelWidth, this.canvasPixelHeight]];
    }

    updateWeights(weightIndex) {
        // if (weightIndex >= 0 && weightIndex < this.weightKeys.length) {
        //   this.weightIndex = weightIndex;
        //   this.weightKey = this.weightKeys[this.weightIndex];
        // }
        const weights = this.items.map(item => +item.weight[weightIndex]);
        let meanWeight = 0;
        for (let i = 0; i < weights.length; i++) {
          meanWeight += weights[i];
        }
        meanWeight /= weights.length;
        this.meanWeight = meanWeight;

        for (let i = 0; i < weights.length; i++) {
            this.items[i]._normalizedWeight = meanWeight > 0 ? weights[i] / meanWeight : 1;
          }
    
      }

    updateItemFontSizeAndCircleSize(scale, itemSizeVariation) {
         this.items.forEach(item => item._circleRadius = this.pixelRatio * (scale * Math.max(circleAvgDiameter * item._normalizedWeight ** itemSizeVariation, circleMinDiameter)) / 2);
        this.items.sort((a, b) => b._circleRadius - a._circleRadius);
      }

    drawAll(){
        this.items.forEach(element => element.drawItemCircle());

        for (let i = 0; i < 20; i++) {
            linkPoints(this.items[i], this.items, 0, 50);
        }
        this.items.forEach(element => element.drawItemCircle());

    }
   

}

class Item{
    constructor(id, x, y, weight){
        this.id = id;
        this.x = x;
        this.y = y;
        this.weight = weight;
        this._cx = 0;
        this._cy = 0; 
        this._circleRadius = 16;   
        this.itemColor = colors[0];
        this.isUp = false; 
    }

    drawItemCircle(){
        let circleColor = ctx.createLinearGradient(this._cx, this._cy - this._circleRadius, this._cx, this._cy + this._circleRadius);
        // circleColor.addColorStop(0, _calcLightColor(this.itemColor, TRANSITION_STRENTH_LIGHT_COLOR));
        // circleColor.addColorStop(1, _calcDarkColor(this.itemColor, TRANSITION_STRENTH_DARK_COLOR));

        if(this._cy > 300){
            circleColor.addColorStop(0, "yellow");
            circleColor.addColorStop(1, "green");
            this.isUp  = true;
        }else{
            circleColor.addColorStop(0, "red");
            circleColor.addColorStop(1, "pink");
            
        }
        ctx.fillStyle = circleColor;
        ctx.beginPath();
        console.log("the x and y distance is", this._cx, this._cy);
        ctx.arc(this._cx, this._cy, this._circleRadius + 8 / 1, 0, 2 * Math.PI);
        //        ctx.arc(this._cx, this._cy, this.circleRadius + 8 / zTransform.k, 0, 2 * Math.PI);
        ctx.fill();
    }
}


function init(){
    for(let i = 0; i < 100; i++){
        particlesArray.push(new Particle());
    }
}

function handleParticles(){
   drawLine();
   for(let i = 0; i < particlesArray.length; i++){
       particlesArray[i].update();
       particlesArray[i].draw();
   }
}

function animate(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   handleParticles();
   requestAnimationFrame(animate);
}

function drawLine() {
   for (var i = 0; i < particlesArray.length; i++) {
       linkPoints(particlesArray[i], particlesArray);
   }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function init2 (ctx){
                                                                                                                                                                            
    // const i1 = new Item(1, 0.2911, -0.3238, [2, 907]);
    // const i2 = new Item(1, 0.1233, 0.452, [5, 907]);
    // const i3 = new Item(1, 0.2813, -0.0594, [140, 907]);
    // const i4 = new Item(1, 0.3945, 0.1831, [16, 907]);
    // const i5 = new Item(1, 0.414, 0.0846, [24, 907]);
    // const i6 = new Item(1, 0.0909, 0.4459, [310, 907]);

    // const i7 = new Item(1, 0.1173, 0.401, [23, 907]);
    // const i8 = new Item(1, 0.5387, 0.0897, [11, 907]);
    // const i9 = new Item(1, 0.2355, 0.1561, [340, 907]);
    // const i10 = new Item(1, 0.4468, 0.1702, [23, 907]);
    // const i11 = new Item(1, 0.5792, 0.0231, [270, 907]);
    // const i12 = new Item(1, 0.2312, 0.3729, [126, 907]);
    // const i13 = new Item(1, 0.2238, 0.0774, [25, 907]);

    let newItems = [];
    let p = 10;
    for(let i = 0; i < 400; i++){
        if(i%100 == 0){
            p = 10;
        }
        newItems.push(new Item(1,Math.random(), Math.random(), [getRandomInt(p)]));
        p += 5;
    }

   // const items = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13];
    const s = new State();
    s.items = newItems;
    s.setCanvasSize(canvas.width, canvas.height);

    s.updateItemPixelPositionAndScaling();
    s.updateWeights(0);
    s.updateItemFontSizeAndCircleSize(1, 0.5);
    s.drawAll();

}

init2(ctx);
//handleParticles();