import chalk from "chalk";

export default function layout(){
    console.log(chalk.green("||==========||"));
    console.log(chalk.green("|| TERMINAL ||"));
    console.log(chalk.green("||   ")+chalk.hex("#ed7bfd")("T")+chalk.red("O")+chalk.yellow("D")+chalk.hex("#3669fb")("O")+chalk.green("   ||"));
    console.log(chalk.green("||==========||"));
}