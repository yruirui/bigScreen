<script setup lang="ts">
import { reactive, ref } from "vue";
import { BorderBox1 as DvBorderBox1 } from "@kjgl77/datav-vue3";
import { BorderBox3 as DvBorderBox3 } from "@kjgl77/datav-vue3";

const borderRef = ref<InstanceType<typeof DvBorderBox1>>();
let width = ref(40);

const configz = reactive({
  data: [
    {
      name: "重庆",
      value: 122,
    },
    {
      name: "渝北",
      value: 50,
    },
    {
      name: "江北",
      value: 71,
    },
    {
      name: "九龙坡",
      value: 66,
    },
    {
      name: "大渡口",
      value: 80,
    },
    {
      name: "渝中",
      value: 35,
    },
    {
      name: "南岸",
      value: 15,
    },
  ],
  img: [
    "../src/assets/top1.svg",
    "../src/assets/top2.svg",
    "../src/assets/top3.svg",
    "../src/assets/top4.svg",
    "../src/assets/top5.svg",
    "../src/assets/top6.svg",
    "../src/assets/top7.svg",
  ],
});
const configa = reactive({
  data: [
    ["行1列1", "行1列2", "行1列3"],
    ["行2列1", "行2列2", "行2列3"],
    ["行3列1", "行3列2", "行3列3"],
    ["行4列1", "行4列2", "行4列3"],
    ["行5列1", "行5列2", "行5列3"],
    ["行6列1", "行6列2", "行6列3"],
    ["行7列1", "行7列2", "行7列3"],
    ["行8列1", "行8列2", "行8列3"],
    ["行9列1", "行9列2", "行9列3"],
    ["行10列1", "行10列2", "行10列3"],
  ],
});
const option = reactive({
  title: {
    text: "剩余油量表",
    style: {
      fill: "#fff",
    },
  },
  series: [
    {
      type: "gauge",
      data: [{ name: "itemA", value: 55 }],
      center: ["50%", "55%"],
      axisLabel: {
        formatter: "{value}%",
        style: {
          fill: "#fff",
        },
      },
      axisTick: {
        style: {
          stroke: "#fff",
        },
      },
      animationCurve: "easeInOutBack",
    },
  ],
});
const configw = reactive({ data: [66, 45], shape: "roundRect" });
const config1 = reactive({
  number: [100],
  content: "{nt}个",
});
const changeConfigq = () => {
  config1.number[0] += Math.random() * 100;
};
</script>

<template>
  <dv-full-screen-container class="background">
    <div class="indexheader">
      <dv-decoration5 :dur="2" style="width: 100%; height: 40px" />
      <div class="indexheader-title">某某安全平台监管中心</div>
    </div>
    <div class="content">
      <div class="left">
        <dv-decoration-11 style="width: 100%; height: 4rem">
          <div color-green font-600 bg="~ dark/0">这里是标题</div>
        </dv-decoration-11>
        <div style="height: 15rem">
          <dv-border-box3>
            <div dv-bg>XXXXXXXXX数据</div>
            <dv-active-ring-chart
              :config="configz"
              style="width: 90%; height: 90%; padding-top: -5%"
            />
          </dv-border-box3>
        </div>
        <div>
          <div demo-bg>
            <dv-border-box8 :reverse="true">
              <div style="">某个数据你看看咯</div>
              <dv-water-level-pond
                :config="configw"
                style="width: 90%; margin-left: 6%; margin-bottom: "
              />
            </dv-border-box8>
          </div>
        </div>

        <div style="height: 10rem">
          <dv-border-box11>
            <div dv-bg>dv-border-box3</div>
            <div
              flex
              style="
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                padding-top: 10%;
                width: 90%;
                padding-left: 5%;
              "
            >
              <dv-button
                @click="
                  {
                  }
                "
                border="Border4"
                color="#a6559d"
                style="width: 6rem"
                >智慧交通</dv-button
              >
              <dv-button
                @click="
                  {
                  }
                "
                border="Border4"
                color="#a6559d"
                style="width: 6rem"
                >智慧交通</dv-button
              >
              <dv-button
                @click="
                  {
                  }
                "
                border="Border5"
                color="#e18a3b"
                style="width: 6rem"
                >智慧医疗</dv-button
              >
              <dv-button
                @click="
                  {
                  }
                "
                border="Border6"
                color="#615ea8"
                style="width: 6rem"
                >智慧农业</dv-button
              >
            </div>
          </dv-border-box11>
        </div>
      </div>
      <div class="mid">
        <dv-decoration-11 style="width: 100%; height: 5rem">
          <div color-green font-600 bg="~ dark/0">这里是中间屏幕</div>
        </dv-decoration-11>
        <div>
          <div style="height: 18rem">
            <dv-border-box1 ref="borderRef">
              neirong
              <dv-conical-column-chart
                :config="configz"
                style="width: 96%; height: 16rem"
              />
            </dv-border-box1>
          </div>
        </div>
        <div style="height: 20rem">
          <dv-border-box3>
            <div dv-bg>dv-border-box3</div>
            <dv-scroll-board
              :config="configa"
              style="width: 90%; height: 80%; margin-left: 4%"
            />
          </dv-border-box3>
        </div>
      </div>
      <div class="right">
        <dv-decoration-11 style="width: 100%; height: 4rem">
          <div color-green font-600 bg="~ dark/0">dv-decoration-11</div>
        </dv-decoration-11>
        <div style="height: 15rem">
          <dv-border-box10>
            <div dv-bg>dv-border-box3</div>

            <dv-capsule-chart
              :config="configz"
              style="width: 300px; height: 200px"
            />
          </dv-border-box10>
        </div>
        <div style="height: 10rem">
          <dv-border-box11>
            <div dv-bg>某个实时数据</div>
            <div style="display: flex; flex-direction: row">
              <dv-digital-flop
                :config="config1"
                style="height: 8rem; font-size: 6rem"
              />
              <span
                @click="changeConfigq"
                style="
                  display: inline-block;
                  text-align: center;
                  line-height: 8rem;
                "
              >
                增加数据
              </span>
            </div>
          </dv-border-box11>
        </div>
        <div style="height: 15rem">
          <dv-border-box5>
            <div dv-bg>dv-border-box3</div>
            <dv-charts :option="option" />
          </dv-border-box5>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<style scoped>
.x {
  border: 1px solid red;
}
.background {
  background: #00061e;
  color: white;
}
.indexheader {
  height: 20vh;

  color: #0c96f8;
  font-size: 4rem;
}
.indexheader-title {
  margin-top: 12px;
}
.content {
  display: flex;
  justify-content: space-around;
}
.left {
  width: 25%;

  height: 76vh;
}
.mid {
  width: 40%;
  height: 76vh;
}
.right {
  width: 25%;
  height: 76vh;
}
.left,
.right,
.mid {
  margin-top: 2vh;
}
</style>
