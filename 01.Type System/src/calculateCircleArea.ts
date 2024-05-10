function calculateCircleArea(radius: number): void {
    const area:number = Math.PI * Math.pow(radius, 2)
    console.log(area.toFixed(2))
}

calculateCircleArea(5)