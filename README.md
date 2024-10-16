# DateRangePicker 元件

## 簡介
`DateRangePicker` 是一個 React 日期範圍選擇器，可讓使用者選擇開始和結束日期，並通過callback函數回傳選擇的日期範圍（格式：`YYYY/MM/DD - YYYY/MM/DD`）

## 功能
1. 支持跨月切換
2. 選擇開始和結束日期範圍
3. 當前日期和選擇範圍顯示
4. 選擇完成後回調函數返回日期範圍

## 使用
1. npm install 安裝專案
1. npm run start 啟動專案
1. 導入元件並使用 `onDateSelect` 函數接收選擇的日期範圍


```jsx
<DateRangePicker onDateSelect={handleDateSelect} />
```
