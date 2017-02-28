        var canvasWidth, canvasHight, canvas, context;
        var isMouseDown = false;
        var LastLoc = { x: 0, y: 0 };
        var scolor= "black";
        function windowToCanvas(x, y)//x,y为距离屏幕的距离
        {
            var bbox = canvas.getBoundingClientRect();//canvas距离屏幕的距离
            return { x: Math.round(x - bbox.left), y: Math.round(y - bbox.top) };//获取距离canvas的距离
        }
        onload = function () {
            canvasWidth = 400;
            canvasHight = 400;
            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");
            drawGrid();

            canvas.onmousedown = function (e) {//鼠标按下
                e.preventDefault();//取消事件的默认动作
                isMouseDown = true;
                LastLoc = windowToCanvas(e.clientX, e.clientY);
            }
            canvas.onmouseup = function (e) {//鼠标按起
                e.preventDefault();
                isMouseDown = false;
            }
            canvas.onmouseout = function (e) {//出了画布
                e.preventDefault();
                isMouseDown = false;
            }
            canvas.onmousemove = function (e) {//鼠标移动
                e.preventDefault();
                if (isMouseDown) {
                    var curloc = windowToCanvas(e.clientX, e.clientY);//获取到移动到的那个点的坐标
                    context.beginPath();
                    context.moveTo(LastLoc.x, LastLoc.y);
                    context.lineTo(curloc.x, curloc.y);
                    context.strokeStyle = scolor;
                    context.lineWidth = 10;
                    context.lineCap = "round";//帽子
                    context.lineJoin = "round";
                    context.stroke();
                    LastLoc = curloc;
                }
            }

            $("#btnclear").click(function () {
                context.clearRect(0, 0, canvasWidth, canvasHight);
                drawGrid();
            });
            $(".dcolor").click(function () {
                $(this).addClass("sel").siblings().removeClass("sel");
                scolor = $(this).attr("data-color");
            });
        }
        function drawGrid() {
    
            canvas.width = canvasWidth;
            canvas.height = canvasHight;
            context.strokeStyle = "#f00";
            context.beginPath();
            context.moveTo(3, 3);
            context.lineTo(canvasWidth - 3, 3);
            context.lineTo(canvasWidth - 3, canvasHight - 3);
            context.lineTo(3, canvasWidth - 3);
            context.closePath();
            context.lineWidth = 6;
            context.stroke();
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(canvasWidth, canvasHight);

            context.moveTo(canvasWidth, 0);
            context.lineTo(0, canvasHight);

            context.moveTo(canvasWidth / 2, 0);
            context.lineTo(canvasWidth / 2, canvasHight);

            context.moveTo(0, canvasHight / 2);
            context.lineTo(canvasWidth, canvasHight / 2);
            context.lineWidth = 1;
            context.stroke();
        }