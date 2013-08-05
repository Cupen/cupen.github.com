===============================
小用xdebug
===============================
:author: cupen
:contact: contact.
:tags: xdebug,php
:version: 1.0.
:date: 2013-05-17 00:12:41
:copyright: copyleft.

经常忘了xdebug的配置，老查文档慢的要死，挑出常用的配置记录一下。

| 关于IDE和一些其它周边工具以后再补充吧。
| 超详细的使用实例: http://xdebug.org/docs/all
| 超详细的配置说明: http://xdebug.org/docs/all_settings

.. code-block:: ini
    :linenos:
	
    [XDebug]
    ; 所有可配置项见 http://xdebug.org/docs/all_settings
    zend_extension = "/usr/local/app/bin/php/ext/php_xdebug.so"

    ; 分析信息用追加方式写入文件，
    ; 使用触发的方式，不需要每次运行都分析。 在参数或者cookie里加入 XDEBUG_PROFILE
    xdebug.profiler_append = 1
    xdebug.profiler_enable = 0
    xdebug.profiler_enable_trigger = 1

    ; 配置文件存放位置 %s表示脚本名（带路径）
    ; 文件名含义同trace_output_name, 见：http://xdebug.org/docs/all_settings#trace_output_name
    xdebug.profiler_output_dir = "/usr/local/app/bin/php/trace/profiler/"
    xdebug.profiler_output_name = "profiler.%s.txt"

    ; 远程调试相关的设置
    xdebug.remote_enable = on
    xdebug.remote_handler = "dbgp"
    xdebug.remote_host = "127.0.0.1"
    xdebug.remote_prot = 9000

    ; trace文件的存放
    ; 文件名含义见 http://xdebug.org/docs/all_settings#trace_output_name 
    xdebug.trace_output_dir = "/usr/local/app/bin/php/trace/trace/"
    xdebug.trace_output_name = "trace.%s"

    ; trace信息是否按是否以追加方式写入到文件（为啥不是apend？）
    ; 0 表示覆盖式写入文件
    ; 1 表示追加式写入文件
    xdebug.trace_options = 0

    ; 不需要自动trace,除非你希望每次执行都会trace(与auto_trace互斥)
	; 触发trace的方式: 在参数或cookie里加入XDEBUG_TRACE
    xdebug.auto_trace = 0
    xdebug.trace_enable_trigger = 1
	
	
    ; 收集变量的赋值
    xdebug.collect_assignments = 1
	
    ; 收集-包含语句
    ; 使用 include(), include_once(), require() require_once()引入的脚本名会被记录下来
    xdebug.collect_includes = 1

    ; 收集函数的参数
    ; 1 表示仅记录参数类型和长度 (f.e. string(6), array(8))
    ; 2 表示仅记录参数类型和长度 ，以及简略信息。 （好吧，我懒得用这个参数，不知具体效果）
    ; 3 表示仅记录参数的内容 至于记录的限度，得看关于变量显示限度的设置
    ;		xdebug.var_display_max_children,
    ;		xdebug.var_display_max_data
    ;		xdebug.var_display_max_depth.
    ; 4 表示记录参数的名字和全部内容，不受变量显示限度设置的影响
    xdebug.collect_params = 4

    ; 收集函数的返回值
    xdebug.collect_return = 1

    ; trace信息格式
    ; 0 给人看的格式（默认值）
    ; 1 给程序解析用的格式 （给其它工具设计的）
    ; 2 html文本（信息量太少了）
    xdebug.trace_format = 0
