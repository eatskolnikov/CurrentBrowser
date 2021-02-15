var currentBrowser = function()
{
    if(typeof(chrome) != 'undefined')
    {
        return chrome;
    }
    return browser;
}