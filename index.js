function moduleRequirer( module )
{
    try
    {
        if( module && typeof module === 'string')
        {
            return require(module);
        }
        else
        {
            return false;
        }
    }
    catch (e)
    {
        return false;
    }
}

module.exports = moduleRequirer;